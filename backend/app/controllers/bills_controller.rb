class BillsController < ApplicationController

    def index
        bills = Bill.all
        render json: bills
    end

    def show
        bill = Bill.find(params[:id])
        render json: bill
    end

    def create
        bill = Bill.create(bill_params)
        render json: bill
    end

    def update
        bill = Bill.find(params[:id])
        bill.update(bill_params)
        render json: bill
    end

    def delete
        bill = Bill.find(params[:id])
        bill.destroy
        render json: {error: 'Bill has been deleted'}
    end

    private
    def bill_params
        params.require(:bill).permit(:id, :name, :frequency, :amount, :due_date)
    end
    
end
