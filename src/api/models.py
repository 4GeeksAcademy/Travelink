from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    rol = db.Column(db.Integer, unique=False, nullable=False)
    # fecha_creado = db.Column(db.datetime(80), unique=False, nullable=False)
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
    phone = db.Column(db.Integer, unique=True, nullable=False)
    # creation_date = db.Column(db.datetime(), unique=False, nullable=False)
    id_user  = db.Column(db.Integer, db.ForeignKey("user.id"))
    viaje = db.relationship('Viaje', back_populates="agencia", single_parent=True)


class Viajero(db.Model):
    __tablename__ = 'Viajero'
    id = db.Column(db.Integer, primary_key=True)
    type_person = db.Column(db.String(120), unique=True, nullable=False)
    cedula = db.Column(db.Integer, unique=True, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    lastname = db.Column(db.String(120), unique=True, nullable=False)
    dates_of_birth = db.Column(db.Integer, unique=True, nullable=False)
    phone = db.Column(db.Integer, unique=True, nullable=False)
    # creation_date = db.Column(db.datetime(80), unique=False, nullable=False)
    id_user  = db.Column(db.Integer, db.ForeignKey("user.id"))
    viaje_reserva = db.relationship('Viaje_Reserva', back_populates="viajero")


class Viaje(db.Model):
    __tablename__ = 'Viaje'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    location = db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(120), unique=True, nullable=False)
    max_travellers = db.Column(db.Integer, unique=True, nullable=False)
    price = db.Column(db.Integer, unique=True, nullable=False)
    type_of_transport = db.Column(db.String(120), unique=True, nullable=False)
    id_status = db.Column(db.Integer, db.ForeignKey("estatus_viaje.id"))
    id_agencia = db.Column(db.Integer, db.ForeignKey("agencia.id"))
    starting_location = db.Column(db.String(120), unique=True, nullable=False)
    destination = db.Column(db.String(120), unique=True, nullable=False)
    # departure_date = db.Column(db.datetime(80), unique=False, nullable=False)
    # return_date = db.Column(db.datetime(80), unique=False, nullable=False)
    # creation_date = db.Column(db.datetime(80), unique=False, nullable=False)
    viaje_reserva = db.relationship('Viaje_Reserva', back_populates="viaje")

class Estatus_Viaje(db.Model):
    __tablename__ = 'Estatus_Viaje'
    id = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.String(120), unique=True, nullable=False)
    # creation_date = db.Column(db.datetime(80), unique=False, nullable=False)
    viaje = db.relationship('Viaje', back_populates="estatus_viaje", single_parent=True)


class Viaje_Reserva(db.Model):
    __tablename__ = 'Viaje_Reserva'
    id = db.Column(db.Integer, primary_key=True)
    id_viaje = db.Column(db.Integer, db.ForeignKey("viaje.id"))
    id_viajero = db.Column(db.Integer, db.ForeignKey("viajero.id"))
    id_status = db.Column(db.Integer, db.ForeignKey("estatus_reserva.id"))
    # creation_date = db.Column(db.datetime(80), unique=False, nullable=False)

class Estatus_Reserva(db.Model):
    __tablename__ = 'Estatus_Reserva'
    id = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.String(120), unique=True, nullable=False)
    # creation_date = db.Column(db.datetime(80), unique=False, nullable=False)
    viaje_reserva = db.relationship('Viaje_Reserva', back_populates="estatus_viajero", single_parent=True)


class Agencia_Favorito(db.Model):
    __tablename__ = 'Agencia_Favorito'
    id = db.Column(db.Integer, primary_key=True)
    id_agencia = db.Column(db.Integer, db.ForeignKey("agencia.id"))
    id_viajero = db.Column(db.Integer, db.ForeignKey("viajero.id"))
    # creation_date = db.Column(db.datetime(80), unique=False, nullable=False)

