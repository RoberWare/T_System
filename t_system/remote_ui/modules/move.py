#!/usr/bin/python3
# -*- coding: utf-8 -*-

"""
.. module:: move
    :platform: Unix
    :synopsis: the top-level submodule of T_System's remote_ui that contains the functions for moving of t_system's arm.

.. moduleauthor:: Cem Baybars GÜÇLÜ <cem.baybars@gmail.com>
"""

from t_system import seer


def move_arm(is_root, move_id, data):
    """The high-level method to move T_System's arm.

    Args:
        is_root (bool):                 Root privileges flag.
        data (dict):                    Move data structure.
    """
    result = True

    if data["type"] == "joint":
        seer.arm.rotate_joints(data["id"], data["quantity"])
    elif data["type"] == "axis":
        seer.arm.move_endpoint(data["id"], data["quantity"])
    else:
        result = False

    return result