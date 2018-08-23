source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.0'
# Use sqlite3 as the database for Active Record
gem 'sqlite3'
# Use Puma as the app server
gem 'puma', '~> 3.11'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use ActiveStorage variant
# gem 'mini_magick', '~> 4.8'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# gem 'c_lexer' # accelerate opal compiler
gem 'opal', github: 'janbiedermann/opal', branch: 'es6_import_export' # need this branch
# and this, its started by the yarn run commands and serves opal-webpack-loader by compiling ruby files for it
gem 'opal-webpack-compile-server', '0.1.9', require: false

# need the pinata branch
gem 'hyper-component', github: 'janbiedermann/hyper-component', branch: 'pinata'
gem 'hyper-mesh', github: 'janbiedermann/hyper-mesh', branch: 'pinata'
gem 'hyper-model', github: 'janbiedermann/hyper-model', branch: 'pinata'
gem 'hyper-operation', github: 'janbiedermann/hyper-operation', branch: 'pinata'
gem 'hyper-react', github: 'janbiedermann/hyper-react', branch: 'pinata'
gem 'hyper-router', github: 'janbiedermann/hyper-router', branch: 'pinata'
gem 'hyper-store', github: 'janbiedermann/hyper-store', branch: 'pinata'
gem 'hyperloop', github: 'janbiedermann/hyperloop', branch: 'pinata'
gem 'hyperloop-config', github: 'janbiedermann/hyperloop-config', branch: 'pinata'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  # springs seems to cause trouble
  #gem 'spring'
  #gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15', '< 4.0'
  gem 'selenium-webdriver'
  # Easy installation and use of chromedriver to run system tests with Chrome
  gem 'chromedriver-helper'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

group :development do
  # not needed if you use node-foreman
  # gem 'foreman'
end
