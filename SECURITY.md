# Security

This package builds HTML strings. It escapes attribute values it owns (`src`, `alt`, linked `href`, and tag text). Nested component content is trusted HTML so components can wrap each other. Callers escape text before passing it as `content`.

Report a vulnerability by opening a private security advisory on this repository. Do not open a public issue for an escaping or injection bug.
