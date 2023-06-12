  
import os
from flask_admin import Admin
from .models import db, User, Agencia, Viajero, PaqueteDeViaje, ViajeReservado, EstatusReservado, AgenciaFavorito
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Agencia, db.session))
    admin.add_view(ModelView(Viajero, db.session))
    admin.add_view(ModelView(PaqueteDeViaje, db.session))
    admin.add_view(ModelView(ViajeReservado, db.session))
    admin.add_view(ModelView(EstatusReservado, db.session))
    admin.add_view(ModelView(AgenciaFavorito, db.session))
    
    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))