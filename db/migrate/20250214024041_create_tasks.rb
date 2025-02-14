class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.boolean :status, null: false, default: false
      t.date :deadline
      t.string :memo

      t.timestamps
    end
  end
end
