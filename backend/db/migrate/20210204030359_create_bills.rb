class CreateBills < ActiveRecord::Migration[6.1]
  def change
    create_table :bills do |t|
      t.string :name
      t.integer :frequency
      t.string :amount
      t.integer :due_date
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
