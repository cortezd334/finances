class CreateGoals < ActiveRecord::Migration[6.1]
  def change
    create_table :goals do |t|
      t.string :type
      t.string :name
      t.string :timeline
      t.integer :amount

      t.timestamps
    end
  end
end
