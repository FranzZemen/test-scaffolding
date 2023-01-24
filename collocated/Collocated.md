# Collocated Test Strategy

## Package Notes

As an aside (related to test scaffolding), we are setting commonjs as the module loader in package.
json. This necessitates the use of module commonjs, node16 or nodenext as no other module will
generate the "require" imports (no warning will be given, but will fail at run time).
