FactoryBot.define do
  factory :task do
    sequence(:title, "title_1")
    memo {'memo'}
    status {false}
  end
end
