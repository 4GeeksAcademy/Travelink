from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
     __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    rol = db.Column(db.Integer(80), unique=False, nullable=False)
    fecha_creado = db.Column(db.datetime(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    agencia = db.relationship('Agencia', back_populates="user", single_parent=True)
    viajero = db.relationship('Viajero', back_populates="user", single_parent=True)

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
    phone = db.Column(db.Interger(80), unique=True, nullable=False)
    creation_date = db.Column(db.datetime(80), unique=False, nullable=False)
    id_user  = db.Column(Integer, ForeignKey("user.id"))

class Viajero(db.Model):
     __tablename__ = 'Viajero'
    id = db.Column(db.Integer, primary_key=True)
    type_person = db.Column(db.String(120), unique=True, nullable=False)
    cedula = db.Column(db.Interger(80), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    lastname = db.Column(db.String(120), unique=True, nullable=False)
    dates_of_birth = db.Column(db.Integer(120), unique=True, nullable=False)
    phone = db.Column(db.Interger(80), unique=True, nullable=False)
    creation_date = db.Column(db.datetime(80), unique=False, nullable=False)
    id_user  = db.Column(Integer, ForeignKey("user.id"))

class Viaje(db.Model):
    __tablename__ = 'Viaje'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    location = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(120), unique=True, nullable=False)
    max_travellers = db.Column(db.Interger(80), unique=True, nullable=False)
    price = db.Column(db.Interger(80), unique=True, nullable=False)
    type_of_transport = db.Column(db.String(120), unique=True, nullable=False)
    id_status = db.Column(Integer, ForeignKey("estatus_viaje.id"))
    id_agencia = db.Column(Integer, ForeignKey("agencia.id"))
    starting_location = db.Column(db.String(120), unique=True, nullable=False)
    destination = db.Column(db.String(120), unique=True, nullable=False)
    departure_date = db.Column(db.datetime(80), unique=False, nullable=False)
    return_date = db.Column(db.datetime(80), unique=False, nullable=False)
    creation_date = db.Column(db.datetime(80), unique=False, nullable=False)
