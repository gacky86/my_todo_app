Task.destroy_all

puts("create 3 new tasks")

SAMPLE_TASKS = [
  { title: 'Going around the world' },
  { title: 'Graduating from college' },
  { title: 'Publishing a book' }
]

SAMPLE_TASKS.each { |task| Task.create(task) }

puts("completed!")
