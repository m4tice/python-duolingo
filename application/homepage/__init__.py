"""
author: @GUU8HC
"""
#pylint: disable=wrong-import-position

from flask import Blueprint

homepage_bp = Blueprint('homepage', __name__, template_folder='templates', static_folder='static')

from . import homepage
