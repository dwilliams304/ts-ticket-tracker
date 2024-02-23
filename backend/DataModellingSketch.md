# Backend
> This is a WIP, there is no info here - just sketching data.

## Tickets
Tickets will need a few basic things:
-unique id
-description
-severity that points to a severity-id
-time open
-assignees which points to users
{
    "ticket-id": 123-123-123,
    "ticket-description": "Basic description!",
    "ticket-severity": "severity-id",
    "time-open": ???,
    "assignees": ["Name 1", "Name 2", "Name 3"]
}

## Severity
{
    "severity-id": 0,
    "severity-name": "Default Name",
    "severity-color": "#00000"
}

## Tags
{
    "tag-id": 0,
    "tag-name": "Default Name",
    "tag-color": "#00000"
}

## Users
{
    "role-id": 0,
    "user-id": 3f4211
    "user-email": "email@email.com",
    "user-name": "Default Name",
    "reports-to" other-user-id
}

## Roles
{
    "role-id": 0,
    "role-name": "Administrator",
    "role-group": "Backend",
}