from run import generation_iterator
from flask_cors import CORS
from flask import Flask, jsonify, request, abort

app = Flask(__name__)
CORS(app)

items = []


@app.route('/api/v1.0/generations', methods=['POST'])
def get_generations():

    env_carac = request.args['envCarac'][1:-1].split(",")
    nb_animals = request.args['nbAnimals'][1:-1].split(",")

    result = generation_iterator(request.args['environment'], env_carac, nb_animals, request.args['nbGeneration'])
    
    return jsonify({'params': request.args, 'result': result}), 201

if __name__ == '__main__':
    app.run(debug=True)
