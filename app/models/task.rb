class Task < ApplicationRecord
  # Associations
  belongs_to :user

  # Validations
  # 一人のUserに属するTaskについてはtitleが重複できない
  # 複数のUser間では重複できる
  validates :title, presence: true, uniqueness: { scope: :user_id }, length: { maximum: 60 }
  validates :memo, length: { maximum: 255 }

  # Scopes
  # %: ワイルドカード
  scope :search, -> (term) {
    # puts "the scope was called"
    where("LOWER(title) LIKE ?", "%#{term.downcase}%" )
  }

end
