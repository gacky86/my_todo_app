require 'rails_helper'

RSpec.describe User, type: :model do
  # first_name, last_name, email, passwordがあれば有効な状態であること
  it "is valid with a first name, last name, email, and password" do
    expect(FactoryBot.build(:user)).to be_valid
  end

  # 名がなければ無効な状態であること
  it "is invalid without a first name" do
    user = FactoryBot.build(:user, first_name: nil)
    user.valid?
    expect(user.errors[:first_name]).to include("can't be blank")
  end

  # 姓がなければ無効な状態であること
  it "is invalid without a last name" do
    user = User.new(last_name: nil)
    user.valid?
    expect(user.errors[:last_name]).to include("can't be blank")
  end

  # メールアドレスがなければ無効な状態であること
  it "is invalid without a email" do
    user = User.new(email: nil)
    user.valid?
    expect(user.errors[:email]).to include("can't be blank")
  end
  # 重複したメールアドレスは無効であること
  it "is invalid with a duplicate email address" do
    User.create(
      first_name: "Ryuya",
      last_name: "Inagaki",
      email: "tester@example.com",
      password: "password"
    )
    user = User.new(
      first_name: "Alice",
      last_name: "Clovere",
      email: "tester@example.com",
      password: "password"
    )
    user.valid?
    expect(user.errors[:email]).to include("has already been taken")
  end
  # ユーザーのフルネームを文字列として返すこと
  it "returns a user's full name as a string" do
    user = User.create(
      first_name: "Ryuya",
      last_name: "Inagaki",
      email: "tester@example.com",
      password: "password"
    )
    expect(user.full_name).to eq "Ryuya Inagaki"
  end
end
