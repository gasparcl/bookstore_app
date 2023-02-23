class Api::V1::PublishersController < ApplicationController
  before_action :set_publisher, only: %i[ show update destroy ]
  after_action :set_pagination_header

  # ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
  # ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
  # ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
  DEFAULT_API_ITEMS_PER_PAGE = 10.00

  # GET /publishers
  def index
    @publishers = Publisher
      .includes(:books)
      .order(:description)
      .page(params[:page])

    render json: @publishers
  end

  # GET /publishers/1
  def show
    render json: @publisher
  end

  # POST /publishers
  def create
    @publisher = Publisher.new(publisher_params)

    if @publisher.save
      render json: @publisher, status: :created, location: @publisher
    else
      render json: @publisher.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /publishers/1
  def update
    if @publisher.update(publisher_params)
      render json: @publisher
    else
      render json: @publisher.errors, status: :unprocessable_entity
    end
  end

  # DELETE /publishers/1
  def destroy
    @publisher.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_publisher
    @publisher = Publisher.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def publisher_params
    params.require(:publisher).permit(:description)
  end

  def set_pagination_header
    total_items = Publisher.all.count
    total_pages = (total_items / DEFAULT_API_ITEMS_PER_PAGE).ceil

    response.set_header("total_items", total_items)
    response.set_header("total_pages", total_pages)
  end
end
