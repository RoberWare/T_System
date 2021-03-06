# Creating new Scenario

Creates a new motion Scenario for T_System's arm to follow path during shoot with camera.
Returns an error if the DB is empty.

## Request
```http
POST /api/scenario?db=<DB>&admin_id=<ADMIN_ID>&root=<ROOT>
Host: domain
Content-Type: application/json; charset=UTF-8

{
    "name": "scenario_name",
    "positions": [
    {
        "id": "b970138a-aecb-11e9-b130-cc2f714671ed",
        "name": "position1_name",
        "cartesian_coords": [30, 25, 42],
        "polar_params": {
                  "coords": [1.28, 1.62, 0.52], 
                  "delays": [0.2, 0, 0.5], 
                  "divide_counts": [5, 3, 2]
                  }
    },
    {
        "id": "b970138a-aecb-11e9-b130-cc2f714671ed",
        "name": "position2_name",
        "cartesian_coords": [30, 25, 42],
        "polar_params": {
                  "coords": [2.12, 1.52, 0.78], 
                  "delays": [0.1, 0.4, 1], 
                  "divide_counts": [1, 3, 1]
                  }
    }],
}
```

## Response

### On Success
```json
{
  "status": "OK",
  "id": "b970138a-aecb-11e9-b130-cc2f714671ed"
}
```

### On failure
```json
{
    "status": "ERROR",
    "message": "Missing or incorrect parameters"
}
```

# Getting Scenarios
- If a specific parameter ID is given, its scenario are listed.
- Returns an error if the DB is empty.

## Request
```http
GET /api/scenario?db=<DB>&id=<ID>&admin_id=<ADMIN_ID>&root=<ROOT>
Host: domain
```

## Response
### On Success
```json
{
    "status": "OK",
    "data":[
    {
    "id": "b97dr48a-aecb-11e9-b130-cc2f7156l1ed",
    "name": "scenario_name",
    "positions": [
    {
        "id": "b970138a-aecb-11e9-b130-cc2f714671ed",
        "name": "position1_name",
        "cartesian_coords": [30, 25, 42],
        "polar_coords": [1.5, 1.02, 0.5]
    },
    {
        "id": "b970138a-aecb-11e9-b130-cc2f714671ed",
        "name": "position2_name",
        "cartesian_coords": [30, 25, 42],
        "polar_coords": [1.5, 1.02, 0.5]
    }]
    }]
}
```
### On Failure
```json
{
    "status": "ERROR"
}
```

# Updating Scenario
Returns an error if the ID or DB is empty.

## Request
```http
PUT /api/scenario?db=<DB>&id=<ID>&admin_id=<ADMIN_ID>&root=<ROOT>
Host: domain
Content-Type: application/json; charset=UTF-8

{
    "name": "scenario_name",
    "positions": [
    {
        "id": "b970138a-aecb-11e9-b130-cc2f714671ed",
        "name": "position1_name",
        "cartesian_coords": [30, 25, 42],
        "polar_coords": [1.5, 1.02, 0.5]
    },
    {
        "id": "b970138a-aecb-11e9-b130-cc2f714671ed",
        "name": "position2_name",
        "cartesian_coords": [30, 25, 42],
        "polar_coords": [1.5, 1.02, 0.5]
    }],
}
```

## Response
### On Success
```json
{
    "status": "OK"
}
```

### On Failure
```json
{
    "status": "ERROR",
    "message": "ID parameter is missing."
}
```

# Deleting scenario
Removes the scenario.
Returns an error if the DB is empty.

## Request
```http
DEL /api/scenario?db=<DB>&id=<ID>&admin_id=<ADMIN_ID>&root=<ROOT>
Content-Type: application/x-www-form-urlencoded; charset=UTF-8
```

## Response
### On Success
```json
{
    "status": "OK"
}
```
### On Failure
```json
{
    "status": "ERROR",
    "message": "ID parameter is missing."
}
```
