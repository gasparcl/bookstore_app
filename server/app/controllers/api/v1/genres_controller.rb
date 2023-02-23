class Api::V1::GenresController < ApplicationController
  before_action :set_genre, only: %i[ show update destroy ]
  after_action :set_pagination_header

  # ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
  # ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
  # ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
  DEFAULT_API_ITEMS_PER_PAGE = 10.00

  # GET /genres
  def index
    @genres = Genre
      .includes(:books)
      .order(:description)
      .page(params[:page])

    render(
      json: @genres,
    )
  end

  # GET /genres/1
  def show
    render json: @genre
  end

  # POST /genres
  def create
    @genre = Genre.new(genre_params)

    if @genre.save
      render json: @genre, status: :created, location: @genre
    else
      render json: @genre.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /genres/1
  def update
    if @genre.update(genre_params)
      render json: @genre
    else
      render json: @genre.errors, status: :unprocessable_entity
    end
  end

  # DELETE /genres/1
  def destroy
    @genre.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_genre
    @genre = Genre.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def genre_params
    params.require(:genre).permit(:description)
  end

  def set_pagination_header
    total_items = Genre.all.count
    total_pages = (total_items / DEFAULT_API_ITEMS_PER_PAGE).ceil

    response.set_header("total_items", total_items)
    response.set_header("total_pages", total_pages)
  end
end
