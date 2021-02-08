class CreateDebts < ActiveRecord::Migration[6.1]
  def change
    create_table :debts do |t|
      t.string :type
      t.integer :amount
      t.integer :min_payment
      t.integer :interest
      t.string :company
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
