class Api::V1::AuthorsController < ApplicationController
  before_action :set_author, only: %i[ show update destroy ]
  after_action :set_pagination_header

  # ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
  # ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
  # ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
  DEFAULT_API_ITEMS_PER_PAGE = 10.00

  # GET /authors
  def index
    @authors = Author
      .includes(:books)
      .order(:name)
      .page(params[:page])

    render json: @authors
  end

  # GET /authors/1
  def show
    render json: @author
  end

  # POST /authors
  def create
    @author = Author.new(author_params)

    if @author.save
      render json: @author, status: :created, location: @author
    else
      render json: @author.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /authors/1
  def update
    if @author.update(author_params)
      render json: @author
    else
      render json: @author.errors, status: :unprocessable_entity
    end
  end

  # DELETE /authors/1
  def destroy
    @author.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_author
    @author = Author.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def author_params
    params.require(:author).permit(:name)
  end

  def set_pagination_header
    total_items = Author.all.count
    total_pages = (total_items / DEFAULT_API_ITEMS_PER_PAGE).ceil

    response.set_header("total_items", total_items)
    response.set_header("total_pages", total_pages)
  end
end
