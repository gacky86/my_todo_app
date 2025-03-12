User.destroy_all
Task.destroy_all

puts("create 3 new tasks")

new_user = User.new({name:"name", email:"test@mail.com", password:"password"})
if new_user.save!
  puts("create a new user")
else
  puts(new_user.errors)
end

SAMPLE_TASKS = [
  { title: 'Going around the world', user_id: new_user.id },
  { title: 'Graduating from college', user_id: new_user.id },
  { title: 'Publishing a book', user_id: new_user.id }
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
