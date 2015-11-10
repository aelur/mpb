import os
SETTINGS_DIR = os.path.dirname(__file__)
print 'SETTINGS_DIR'
print SETTINGS_DIR
PROJECT_PATH = os.path.join(SETTINGS_DIR, os.pardir)
PROJECT_PATH = os.path.abspath(PROJECT_PATH)
print '\nPROJECT_PATH'
print PROJECT_PATH



	
STATIC_PATH = os.path.join(PROJECT_PATH,'museointeractivo/static/')

print '\nSTATIC_PATH'
print STATIC_PATH
STATIC_ROOT = os.path.join(PROJECT_PATH, 'static/')
print '\nSTATIC_ROOT'
print STATIC_ROOT

MEDIA_ROOT = os.path.join(PROJECT_PATH, 'media/') # Absolute path to the media directory
print '\nMEDIA_ROOT'
print MEDIA_ROOT
