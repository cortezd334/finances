class CreateBills < ActiveRecord::Migration[6.1]
  def change
    create_table :bills do |t|
      t.string :name
      t.string :frequency
      t.string :amount
      t.integer :due_date

      t.timestamps
    end
  end
end
