class CreateCheckbooks < ActiveRecord::Migration[6.1]
  def change
    create_table :checkbooks do |t|
      t.string :name
      t.string :category
      t.integer :amount
      t.string :date
      t.boolean :cleared
      t.string :memo

      t.timestamps
    end
  end
end
