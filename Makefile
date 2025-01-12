run:
	@echo 'staring FrontEnd'
	@call cd Frontend && npx expo start --android

start:
	@echo "Activating virtual environment and starting Django server..."
	@call env\Scripts\activate && cd api/core && python manage.py runserver

jango:
	@echo "Starting Django server..."
	@call env\Scripts\activate && cd api/core && python manage.py runserver
start_all:
	@echo 'staring FrontEnd'
	@call cd Frontend && npm start
	@echo "Activating virtual environment and starting Django server..."
	@call env\Scripts\activate && cd api/core && python manage.py runserver
