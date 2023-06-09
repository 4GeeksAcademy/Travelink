"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['POST'])
def new_user():

    body = request.json #lo que viene del request como un dic de python 🦎

    try:
        nuevo_user = User(body['username'], body['email'], body['password'], body['rol'])
        # nuevo_user = User(body['username'], body['email'], body['password'], body['rol'], body['is_active'])

        print(nuevo_user) # Object of type Piso || an Instance of class Piso

        db.session.add(nuevo_user) # Memoria RAM de SQLAlchemy

        db.session.commit() # Inserta el nuevo_piso en la BD de psql ✅

        return jsonify(nuevo_user.serialize()), 200 #Piso searilzado
    
    except Exception as err:

        return jsonify({ "message" : "Ah ocurrido un error inesperado ‼️" + str(err)}), 500

