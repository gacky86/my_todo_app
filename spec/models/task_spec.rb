require 'rails_helper'

RSpec.describe Task, type: :model do
  # ユーザー単位では同じtitle を持つタスクを複数作成することはできない
  it "does not allow duplicate task titles per user" do
    user = User.create(
      first_name: "Ryuya",
      last_name: "Inagaki",
      email: "tester@example.com",
      password: "password"
    )
    user.tasks.create(
      title: "test1"
    )
    new_task = user.tasks.build(
      title: "test1"
    )
    new_task.valid?
    expect(new_task.errors[:title]).to include("has already been taken")
  end

  # 二人のユーザーが同じtitleのタスクを作成することはできる
  it "allows duplicate task titles per two users" do
    user_1 = User.create(
      first_name: "Ryuya",
      last_name: "Inagaki",
      email: "tester@example.com",
      password: "password"
    )
    user_1.tasks.create(
      title: "test1"
    )
    user_2 = User.create(
      first_name: "Lucy",
      last_name: "Smith",
      email: "tester2@example.com",
      password: "password2"
    )
    task_2 = user_2.tasks.create(
      title: "test2"
    )
    expect(task_2).to be_valid
  end

  # 文字列に一致するtitileを持つTaskを検索する
  describe "search task for a term" do
    # beforeでこのdescribe内で使用できるデータをセットアップする
    before do
      user_1 = User.create(
        first_name: "Ryuya",
        last_name: "Inagaki",
        email: "tester@example.com",
        password: "password"
      )
      @task_1 = user_1.tasks.create(
        title: "This is the first task"
      )
      @task_2 = user_1.tasks.create(
        title: "This is the second task"
      )
      @task_3 = user_1.tasks.create(
        title: "First, do the chores"
      )
    end

    # 一致するデータが見つかる場合
    context "when a match was found" do
      # 検索文字列に一致するtitleを持つTaskを返すこと
      it "returns tasks with title that match the search term" do
        expect(Task.search("first")).to include(@task_1, @task_3)
        expect(Task.search("first")).not_to include(@task_2)
      end
    end

    # 一致するデータが見つからない場合
    context "when a match was not found" do
      # 検索文字列に一致するtitleを持つTaskがなければ、空のコレクションを返すこと
      it "returns an empty collection when no result was found" do
        expect(Task.search("message")).to be_empty
      end
    end
  end
end
