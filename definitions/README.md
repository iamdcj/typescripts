# Type Definitions

TypeScript needs to know the types it is working with in order to operate correctly - if it can't work out what types are being used, it won't be successful in doing its job.

Type Definition files allow typescript to understand what types are being used in a JS module/package, and can be considered an adapter layer for a particular package; **_these files provide TS with the types the package is using_**.

They can be used as a source documentation for a given package; they describe exactly what a particular thing in the library does/is.

```
X: {
  interface DoSumink: {
    logSummart(sumart: any): void;
  }
}
```

We can see from the following that this imaginary package provides a method for logging something, which takes just one parameter when invoked, and that parameter can be anything.

---

### **Importing Type Definition**

```
import X from 'package-x';
```

Some packages will automatically provide a type definition file, allowing 'out-of-the-box' usage of a package in our TS-powered application, however TypeScript will complain if it isn't aware of the types being used in the `X` module;

If you see the following warning/error in your module, then you need to install and provide TS with the correct **Type Definition** file; `Could not find a declaration file for module 'faker'.`

Type Definition tend to following the `@types/package-x` convention, e.g.

```
npm install @types/package-x
```

and the actual files usually follow a convention of `index.d.ts`.

Once the Type Definition is provided, you should be free to utilise what the package has to offer in your application.
