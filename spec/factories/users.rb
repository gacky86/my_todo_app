FactoryBot.define do
  factory :user do
    first_name {"Ryuya"}
    last_name {"Inagaki"}
    sequence(:email) {|n|"tester#{n}@example.com"}
    password {"password"}
  end
end
