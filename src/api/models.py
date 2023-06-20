from flask_sqlalchemy import SQLAlchemy
from datetime import date

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    rol = db.Column(db.Integer, unique=False, nullable=False)
    creation_date = db.Column(db.DateTime, nullable=False)
    # is_active = db.Column(db.Boolean, unique=False, nullable=True)
    agencias = db.relationship('Agencia', backref="User", lazy=True)
    viajeros = db.relationship('Viajero', backref="User", lazy=True)

    def __init__(self, username, email, password, rol):
        self.username = username
        self.email = email
        self.password = password
        self.rol = rol
        self.creation_date = date.today()
        # self.is_active = True

    def __repr__(self):
        return f'<User {self.username}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username" : self.username,
            "rol" : self.rol,
            "creation_date" : self.creation_date
            # do not serialize the password, its a security breach
        }
    

class Agencia(db.Model):
    __tablename__ = 'Agencia'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), unique=False, nullable=False)
    rif = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(15), unique=True, nullable=False)
    creation_date = db.Column(db.DateTime, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("User.id"), nullable=False)
    paquetes_de_viajes = db.relationship('PaqueteDeViaje', backref="Agencia", lazy=True)

    def __init__(self, name, rif, phone, user_id):
        self.name = name
        self.rif = rif
        self.phone = phone
        self.user_id = user_id
        self.creation_date = date.today()

        # self.is_active = True

    def __repr__(self):
        return f'<Agencia {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "rif": self.rif,
            "phone": self.phone,
            "creation_date": self.creation_date,            
            # do not serialize the password, its a security breach
        }


class Viajero(db.Model):
    __tablename__ = 'Viajero'
    id = db.Column(db.Integer, primary_key=True)
    type_person = db.Column(db.String(120), unique=False, nullable=False)
    cedula = db.Column(db.Integer, unique=True, nullable=False)
    name = db.Column(db.String(120), nullable=False)
    lastname = db.Column(db.String(120), nullable=False)
    dates_of_birth = db.Column(db.DateTime,  nullable=False)
    phone = db.Column(db.String(15), unique=True, nullable=False)
    creation_date = db.Column(db.DateTime, nullable=False)
    user_id  = db.Column(db.Integer, db.ForeignKey("User.id"), nullable=False)
    viajes_reservados = db.relationship('ViajeReservado', backref="Viajero", lazy=True)

    def __init__(self, type_person, cedula, name, lastname, dates_of_birth, phone, user_id):
        self.type_person = type_person
        self.cedula = cedula
        self.name = name
        self.lastname = lastname
        self.dates_of_birth = dates_of_birth
        self.phone = phone
        self.user_id = user_id
        self.creation_date = date.today()

    def __repr__(self):
        return f'<Viajero {self.cedula}>'

    def serialize(self):
        return {
            "id": self.id,
            "type_person": self.type_person,
            "cedula": self.cedula,
            "name": self.name,
            "lastname": self.lastname,
            "dates_of_birth": self.dates_of_birth,
            "phone": self.phone,
            "creation_date": self.creation_date
            # do not serialize the password, its a security breach
        }

class AgenciaFavorito(db.Model):
    __tablename__ = 'AgenciaFavorito'
    id = db.Column(db.Integer, primary_key=True)
    agencia_id = db.Column(db.Integer, db.ForeignKey("Agencia.id"), nullable=False)
    viajero_id = db.Column(db.Integer, db.ForeignKey("Viajero.id"), nullable=False)
    creation_date = db.Column(db.DateTime, nullable=False)

    def __init__(self, agencia_id, viajero_id):
        self.agencia_id = agencia_id
        self.viajero_id = viajero_id
        self.creation_date = date.today()

    def serialize(self):
        return {
            "id": self.id,
            "agencia_id": self.agencia_id,
            "viajero_id": self.viajero_id,
            "creation_date": self.creation_date,
        }

# class EstatusViaje(db.Model):
#     __tablename__ = 'EstatusViaje'
#     id = db.Column(db.Integer, primary_key=True)
#     status = db.Column(db.String(120), nullable=False)
#     creation_date = db.Column(db.DateTime, nullable=False)
#     paquetes_de_viajes = db.relationship('PaqueteDeViaje', backref="EstatusViaje", lazy=True)

class PaqueteDeViaje(db.Model):
    __tablename__ = 'PaqueteDeViaje'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    # location = db.Column(db.String(120), nullable=False)
    destination = db.Column(db.String(120), nullable=False)
    starting_location = db.Column(db.String(120),  nullable=False)
    start_date = db.Column(db.DateTime, nullable=False)
    finish_date = db.Column(db.DateTime, nullable=False)
    includes = db.Column(db.String(120), nullable=False)
    type_of_transport = db.Column(db.String(120), nullable=False)
    type_of_accommodation = db.Column(db.String(120), nullable=False)
    description = db.Column(db.String(120), nullable=False)
    max_travellers = db.Column(db.Integer, nullable=False)
    reservation_cost= db.Column(db.Integer, nullable=False)
    total_cost = db.Column(db.Integer, nullable=False)
    # status_id = db.Column(db.Integer, db.ForeignKey("EstatusViaje.id"), nullable=False)
    agencia_id = db.Column(db.Integer, db.ForeignKey("Agencia.id"), nullable=False)
    creation_date = db.Column(db.DateTime, nullable=False)
    viaje_reservados = db.relationship('ViajeReservado', backref="PaqueteDeViaje", lazy=True)

    def __init__(self, title, destination, starting_location, start_date, finish_date, includes, type_of_transport, type_of_accommodation, description, max_travellers, reservation_cost, total_cost, agencia_id):
        self.title = title
        self.destination = destination
        self.starting_location = starting_location
        self.start_date = start_date
        self.finish_date = finish_date
        self.includes = includes
        self.type_of_transport = type_of_transport
        self.type_of_accommodation = type_of_accommodation
        self.description = description
        self.max_travellers = max_travellers
        self.reservation_cost = reservation_cost
        self.total_cost = total_cost
        self.agencia_id = agencia_id
        self.creation_date = date.today()

    def __repr__(self):
        return f'<PaqueteDeViaje {self.title}>'

    def serialize(self):
        agencia = Agencia.query.get(self.agencia_id)
        return {
            "id": self.id,
            "title": self.title,
            "starting_location": self.starting_location,
            "destination": self.destination,
            "start_date": self.start_date,
            "finish_date": self.finish_date,
            "type_of_transport": self.type_of_transport,
            "type_of_accommodation": self.type_of_accommodation,
            "description": self.description,
            "max_travellers": self.max_travellers,
            "reservation_cost": self.reservation_cost,
            "total_cost": self.total_cost,
            "agencia_id": self.agencia_id,
            "creation_date": self.creation_date,
            "agencia_name": agencia.name
        }

class ViajeReservado(db.Model):
    __tablename__ = 'ViajeReserva'
    id = db.Column(db.Integer, primary_key=True)
    paquetedeviaje_id = db.Column(db.Integer, db.ForeignKey("PaqueteDeViaje.id"), nullable=False)
    viajero_id = db.Column(db.Integer, db.ForeignKey("Viajero.id"), nullable=False)
    status_id = db.Column(db.Integer, db.ForeignKey("EstatusReservado.id"), nullable=False)
    creation_date = db.Column(db.DateTime, nullable=False)


class EstatusReservado(db.Model):
    __tablename__ = 'EstatusReservado'
    id = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.String(120), nullable=False)
    cod_status = db.Column(db.Integer, nullable=False)
    creation_date = db.Column(db.DateTime, nullable=False)
    viaje_reservados = db.relationship('ViajeReservado', backref="EstatusReservado", lazy=True)

