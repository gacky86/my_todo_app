Task.destroy_all

puts("create 3 new tasks")

user = User.first

SAMPLE_TASKS = [
  { title: 'Going around the world', user_id: user.id },
  { title: 'Graduating from college', user_id: user.id },
  { title: 'Publishing a book', user_id: user.id }
]


SAMPLE_TASKS.each do |task|
  new_task = Task.new(task)
  if new_task.save!
    puts("Made 1 task")
  else
    puts(new_task.errors)
  end
end

puts("completed!")
