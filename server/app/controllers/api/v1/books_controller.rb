class Api::V1::BooksController < Api::ApiController
  include Paginable
  
  before_action :set_book, only: %i[ show update destroy ]
  after_action  :set_pagination_header

  # ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
  # ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
  # ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
  DEFAULT_API_ITEMS_PER_PAGE = 15.00

  # GET /books
  def index
    @books = Book.includes(:author, :genre, :publisher).page(params[:page]) 
    
    render(
      json: @books
    )
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

    def set_pagination_header
      total_items = Book.all.count
      total_pages = (total_items / DEFAULT_API_ITEMS_PER_PAGE).ceil

      response.set_header("total_items", total_items)
      response.set_header("total_pages", total_pages)
    end

end
