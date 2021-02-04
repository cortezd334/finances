class CreateIncomes < ActiveRecord::Migration[6.1]
  def change
    create_table :incomes do |t|
      t.string :name
      t.string :frequency
      t.integer :amount

      t.timestamps
    end
  end
end
