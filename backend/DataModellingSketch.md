# Backend
> This is a WIP, there is no info here - just sketching data.

Tickets will look like:
{
    "ticket-id": 123-123-123,
    "ticket-description": "Basic description!",
    "ticket-severity": "severity-id",
    "time-open": ???,
    "assignees": ["Name 1", "Name 2", "Name 3"]
}

Severity data model:
{
    "severity-id": 0,
    "severity-name": "Default Name",
    "severity-color": "#00000"
}

Tag data model:
{
    "tag-id": 0,
    "tag-name": "Default Name",
    "tag-color": "#00000"
}

User data model:
{
    "role-id": 0,
    "user-id": 3f4211
    "user-email": "email@email.com",
    "user-name": "Default Name",
    "reports-to" other-user-id
}

Role data model:
{
    "role-id": 0,
    "role-name": "Administrator",
    "role-group": "Backend",
}