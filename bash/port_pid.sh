#!/bin/bash
lsof -nP -i4TCP:$1 | grep LISTEN
