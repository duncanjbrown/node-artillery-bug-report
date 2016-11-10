### How to use

#### Install node 7.1 and 6.6.0

You need nodeenv installed: https://github.com/ekalinin/nodeenv.

The setup script will install each version.

```
./setup.sh
```

#### Start a basic HTTP server

This server will print to the console whenever it receives or serves a request. It always returns 200.

```
node index.js
```

#### Run the load test in one or the other version of node

Running under Node 7 will cause a crash.

```
. node-7/bin/activate
artillery run artillery-config/experiment.yml
```

```
. node-6/bin/activate
artillery run artillery-config/experiment.yml
```

Afterwards, invoke `deactivate_node` to leave nodeenv.

### Debugging

```
node --inspect `which artillery` run artillery-config/experiment.yml
```
