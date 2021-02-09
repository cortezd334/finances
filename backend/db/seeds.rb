# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# <option value='0'>Choose...</option>
# <option value='1'>Daily</option>
# <option value='2'>Weekly</option>
# <option value='3'>Monthly</option>
# <option value='4'>Yearly</option>

user = User.create(name: 'Daisy', age: 28, username: 'dd')

bill1 = Bill.create(name: 'Netflix', frequency: 3, amount: '17.99', due_date: 5, user_id: 1)
bill2 = Bill.create(name: 'Rent', frequency: 3, amount: '1200', due_date: 1, user_id: 1)
bill3 = Bill.create(name: 'Ford', frequency: 3, amount: '350', due_date: 23, user_id: 1)
bill4 = Bill.create(name: 'Amazon Prime', frequency: 4, amount: '112', due_date: 18, user_id: 1)
bill4 = Bill.create(name: 'Parking', frequency: 2, amount: '20', due_date: 3, user_id: 1)