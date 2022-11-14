class Api::V1::BooksController < ApplicationController
  include Paginable
  
  before_action :set_book, only: %i[ show update destroy ]

  # GET /books
  def index
    books = Book.all

    paginated_books = paging(books, params[:pageSize], params[:page])
    response.set_header('total',  paginated_books[:total])

    render json: paginated_books[:records]
  end

  # GET /books/1
  def show
    render json: @book
  end

  # POST /books
  def create
    @book = Book.new(book_params)

    if @book.save
      render json: @book, status: :created, location: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /books/1
  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /books/1
  def destroy
    @book.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def book_params
      params.require(:book).permit(:title, :synopsis, :review, :language, :page_count, :release_date, :genre_id, :author_id, :publisher_id, :isbn, :url_image)
    end
end
