"""empty message

Revision ID: 3f9cd9863050
Revises: b28ad27105bd
Create Date: 2023-06-21 05:04:31.832523

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3f9cd9863050'
down_revision = 'b28ad27105bd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('PaqueteDeViaje', schema=None) as batch_op:
        batch_op.add_column(sa.Column('img_paquete', sa.String(length=450), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('PaqueteDeViaje', schema=None) as batch_op:
        batch_op.drop_column('img_paquete')

    # ### end Alembic commands ###
