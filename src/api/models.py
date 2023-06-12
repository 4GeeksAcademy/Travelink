from flask_sqlalchemy import SQLAlchemy

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
        # self.is_active = True

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Agencia(db.Model):
    __tablename__ = 'Agencia'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    rif = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.Integer, unique=True, nullable=False)
    creation_date = db.Column(db.DateTime, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("User.id"), nullable=False)
    paquetes_de_viajes = db.relationship('PaqueteDeViaje', backref="Agencia", lazy=True)


class Viajero(db.Model):
    __tablename__ = 'Viajero'
    id = db.Column(db.Integer, primary_key=True)
    type_person = db.Column(db.String(120), unique=False, nullable=False)
    cedula = db.Column(db.Integer, unique=True, nullable=False)
    name = db.Column(db.String(120), nullable=False)
    lastname = db.Column(db.String(120), nullable=False)
    dates_of_birth = db.Column(db.DateTime,  nullable=False)
    phone = db.Column(db.Integer, unique=True, nullable=False)
    creation_date = db.Column(db.DateTime, nullable=False)
    user_id  = db.Column(db.Integer, db.ForeignKey("User.id"), nullable=False)
    viajes_reservados = db.relationship('ViajeReservado', backref="Viajero", lazy=True)

class AgenciaFavorito(db.Model):
    __tablename__ = 'AgenciaFavorito'
    id = db.Column(db.Integer, primary_key=True)
    agencia_id = db.Column(db.Integer, db.ForeignKey("Agencia.id"), nullable=False)
    viajero_id = db.Column(db.Integer, db.ForeignKey("Viajero.id"), nullable=False)
    creation_date = db.Column(db.DateTime, nullable=False)

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
    location = db.Column(db.String(120), nullable=False)
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
    creation_date = db.Column(db.DateTime, nullable=False)
    viaje_reservados = db.relationship('ViajeReservado', backref="EstatusReservado", lazy=True)

