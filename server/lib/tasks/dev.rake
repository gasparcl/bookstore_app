# Comando para gerar a task - "rails g(generate) task namespace nome_da_task"
namespace :dev do
  # ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
  # ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
  # ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
  LANGUAGES_ARR = ["Portuguese", "Portuguese", "Portuguese", "Portuguese", "Portuguese", "Portuguese", "Portuguese", "Portuguese", "Portuguese", "Portuguese", "Portuguese", "Portuguese", "Portuguese", "Portuguese", "Portuguese", "English", "English", "English", "English", "English", "Spanish", "Spanish", "Spanish", "Spanish", "Spanish", "French", "French", "French", "German", "German", "Latim"]
  # ╔╦╗╔═╗╦╔╗╔  ╔╦╗╔═╗╔═╗╦╔═
  # ║║║╠═╣║║║║   ║ ╠═╣╚═╗╠╩╗
  # ╩ ╩╩ ╩╩╝╚╝   ╩ ╩ ╩╚═╝╩ ╩
  desc "Configure development environment and seed DB"
  task setup: :environment do
    if Rails.env.development?
      show_spinner("Dropping DB") { %x(rails db:drop) }
      show_spinner("Creating DB") { %x(rails db:create) }
      show_spinner("Migrating DB") { %x(rails db:migrate) }
      show_spinner("Creating Admin Account") { %x(rails dev:add_admin_account) }
      show_spinner("Seeding Genres") { %x(rails dev:add_genres) }
      show_spinner("Seeding Authors") { %x(rails dev:add_authors) }
      show_spinner("Seeding Publishers") { %x(rails dev:add_publishers) }
      show_spinner("Seeding Books") { %x(rails dev:add_books) }
    else
      puts "You are not in a development environment"
    end
  end

  # ╔╦╗╔═╗╔═╗╦╔═╔═╗
  #  ║ ╠═╣╚═╗╠╩╗╚═╗
  #  ╩ ╩ ╩╚═╝╩ ╩╚═╝
  desc "Add default admin account"
  task add_admin_account: :environment do
    User.create!(
      username: "admin",
      email: "admin@admin.com",
      name: "DEFAULT USER ADMIN",
      password: "qwe123",
      password_confirmation: "qwe123",
    )
  end

  desc "Adding up to 35 single and random genres"
  task add_genres: :environment do
    35.times do |i|
      Genre.find_or_create_by!(
        description: Faker::Book.genre,
      )
    end
  end

  desc "Adding up to 80 single and random authors"
  task add_authors: :environment do
    80.times do |i|
      Author.find_or_create_by!(
        name: Faker::Book.author,
      )
    end
  end

  desc "Adding up to 35 single and random publishers"
  task add_publishers: :environment do
    35.times do |i|
      Publisher.find_or_create_by!(
        description: Faker::Book.publisher,
      )
    end
  end

  desc "Adding random books by Author"
  task add_books: :environment do
    Author.all.each do |author|
      rand(3..25).times do |i|
        params = create_book_params(author)
        Book.create!(params[:book])
      end
    end
  end

  # ╔═╗╦═╗╦╦  ╦╔═╗╔╦╗╔═╗  ╔╦╗╔═╗╔╦╗╦ ╦╔═╗╔╦╗╔═╗
  # ╠═╝╠╦╝║╚╗╔╝╠═╣ ║ ║╣   ║║║║╣  ║ ╠═╣║ ║ ║║╚═╗
  # ╩  ╩╚═╩ ╚╝ ╩ ╩ ╩ ╚═╝  ╩ ╩╚═╝ ╩ ╩ ╩╚═╝═╩╝╚═╝
  #Apenas o namespace dev:setup terá acesso ao método
  private

  def show_spinner(start_msg, end_msg = "Done")
    spinner = TTY::Spinner.new("[:spinner] #{start_msg}...", format: :dots, interval: 18)
    spinner.auto_spin
    #O bloco de código yield deve ser inserido dentro de um do snippet, ou até entre chaves '{}', quando é apenas uma linha de execução
    yield
    spinner.success("(#{end_msg})")
  end

  def create_book_params(author = Author.all.sample,
                         genre = Genre.all.sample,
                         publisher = Publisher.all.sample,
                         picsum_seed = rand(0.0..9999.9))
    {
      book: {
        title: Faker::Book.title,
        synopsis: Faker::Lorem.paragraph_by_chars(number: rand(80..500)),
        language: LANGUAGES_ARR[rand(0..LANGUAGES_ARR.count - 1)],
        page_count: Faker::Number.between(from: 25, to: 1000),
        release_date: Faker::Date.between(from: "1912-01-01", to: Date.today),
        isbn: Faker::Code.isbn,
        url_image: "https://picsum.photos/seed/#{picsum_seed}/500/750",
        banner_url: "https://picsum.photos/seed/#{picsum_seed}/1920/1080",
        author: author,
        genre: genre,
        publisher: publisher,
      },
    }
  end
end
