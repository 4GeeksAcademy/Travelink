"""empty message

Revision ID: 191c82c0ccb0
Revises: 
Create Date: 2023-06-09 23:38:23.408387

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '191c82c0ccb0'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Estatus_Reserva',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('status', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('status')
    )
    op.create_table('Estatus_Viaje',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('status', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('status')
    )
    op.create_table('User',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('rol', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('Agencia',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('rif', sa.String(length=120), nullable=False),
    sa.Column('phone', sa.Integer(), nullable=False),
    sa.Column('id_user', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id_user'], ['User.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name'),
    sa.UniqueConstraint('phone'),
    sa.UniqueConstraint('rif')
    )
    op.create_table('Viajero',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('type_person', sa.String(length=120), nullable=False),
    sa.Column('cedula', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('lastname', sa.String(length=120), nullable=False),
    sa.Column('dates_of_birth', sa.Integer(), nullable=False),
    sa.Column('phone', sa.Integer(), nullable=False),
    sa.Column('id_user', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id_user'], ['User.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('cedula'),
    sa.UniqueConstraint('dates_of_birth'),
    sa.UniqueConstraint('lastname'),
    sa.UniqueConstraint('name'),
    sa.UniqueConstraint('phone'),
    sa.UniqueConstraint('type_person')
    )
    op.create_table('Agencia_Favorito',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_agencia', sa.Integer(), nullable=True),
    sa.Column('id_viajero', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id_agencia'], ['Agencia.id'], ),
    sa.ForeignKeyConstraint(['id_viajero'], ['Viajero.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('Viaje',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=120), nullable=False),
    sa.Column('location', sa.String(length=120), nullable=False),
    sa.Column('description', sa.String(length=120), nullable=False),
    sa.Column('max_travellers', sa.Integer(), nullable=False),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.Column('type_of_transport', sa.String(length=120), nullable=False),
    sa.Column('id_status', sa.Integer(), nullable=True),
    sa.Column('id_agencia', sa.Integer(), nullable=True),
    sa.Column('starting_location', sa.String(length=120), nullable=False),
    sa.Column('destination', sa.String(length=120), nullable=False),
    sa.ForeignKeyConstraint(['id_agencia'], ['Agencia.id'], ),
    sa.ForeignKeyConstraint(['id_status'], ['Estatus_Viaje.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('description'),
    sa.UniqueConstraint('destination'),
    sa.UniqueConstraint('location'),
    sa.UniqueConstraint('max_travellers'),
    sa.UniqueConstraint('price'),
    sa.UniqueConstraint('starting_location'),
    sa.UniqueConstraint('title'),
    sa.UniqueConstraint('type_of_transport')
    )
    op.create_table('Viaje_Reserva',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_viaje', sa.Integer(), nullable=True),
    sa.Column('id_viajero', sa.Integer(), nullable=True),
    sa.Column('id_status', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id_status'], ['Estatus_Reserva.id'], ),
    sa.ForeignKeyConstraint(['id_viaje'], ['Viaje.id'], ),
    sa.ForeignKeyConstraint(['id_viajero'], ['Viajero.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('Viaje_Reserva')
    op.drop_table('Viaje')
    op.drop_table('Agencia_Favorito')
    op.drop_table('Viajero')
    op.drop_table('Agencia')
    op.drop_table('User')
    op.drop_table('Estatus_Viaje')
    op.drop_table('Estatus_Reserva')
    # ### end Alembic commands ###