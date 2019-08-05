# Type Definitions

TypeScript needs to know the types it is working with in order to operate correctly - if it can't work out what types are being used, it won't be successful in doing its job.

Type Definition files allow typescript to understand what types are being used in a JS module/package, and can be considered an adapter layer for a particular package.

```
import X from 'package-x';
```

Some packages will automatically provide a type defintion, allowing 'out-of-the-box' usage of a package in our TS-powered application, however TypeScript will complain if it isn't aware of the types being used in the `X` module;

If you see the following warning/error in your module, then you need to install and provide TS with the correct **Type Definition** file; `Could not find a declaration file for module 'faker'.`

Type Definition tend to following the `@types/package-x` convention, e.g.

```
npm install @types/package-x
```

Once the Type Definition is provided, you should be free to utilise what the package has to offer in your application.
