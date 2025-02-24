class Task < ApplicationRecord
  # Associations
  belongs_to :user

  # Validations
  # 一人のUserに属するTaskについてはtitleが重複できない
  # 複数のUser間では重複できる
  validates :title, presence: true, uniqueness: { scope: :user_id }

  # Scopes
  # %: ワイルドカード
  scope :search, -> (term) {
    # puts "the scope was called"
    where("LOWER(title) LIKE ?", "%#{term.downcase}%" )
  }

end
