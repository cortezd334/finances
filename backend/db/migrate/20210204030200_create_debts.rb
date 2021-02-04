class CreateDebts < ActiveRecord::Migration[6.1]
  def change
    create_table :debts do |t|
      t.string :type
      t.integer :amount
      t.integer :min_payment
      t.integer :interest
      t.string :company

      t.timestamps
    end
  end
end
