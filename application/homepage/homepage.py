# application/homepage/homepage.py
"""
author: @GUU8HC
"""
#pylint: disable=line-too-long

from flask import render_template, request, redirect, url_for, flash

from application.settings import DEBUG_MODE
from application.authentication import auth

from . import homepage_bp

@homepage_bp.route('/')
def homepage():
    """
    render homepage template
    """
    return render_template('homepage/homepage.html')

@homepage_bp.route('/homepage_authenticated')
def homepage_authenticated():
    """
    render authenticated homepage template
    """
    return render_template('homepage/homepage_authenticated.html')

@homepage_bp.route('/login', methods=['POST'])
def login():
    """
    Handle login form submission
    """
    username = request.form['username']
    password = request.form['password']

    if DEBUG_MODE:
        print(f"[DEBUG] homepage.py: {username} :: {password} :: {auth.authenticate(username, password)}")

    if auth.authenticate(username, password):
        # Authentication successful
        return redirect(url_for('homepage.homepage_authenticated'))
    else:
        # Authentication failed
        flash('Invalid username or password', 'danger')
        return redirect(url_for('homepage.homepage'))
