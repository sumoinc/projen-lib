# API Reference <a name="API Reference" id="api-reference"></a>



## Classes <a name="Classes" id="Classes"></a>

### VsCodeConfiguration <a name="VsCodeConfiguration" id="@sumoc/projen-lib.VsCodeConfiguration"></a>

#### Initializers <a name="Initializers" id="@sumoc/projen-lib.VsCodeConfiguration.Initializer"></a>

```typescript
import { VsCodeConfiguration } from '@sumoc/projen-lib'

new VsCodeConfiguration(project: Project)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@sumoc/projen-lib.VsCodeConfiguration.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@sumoc/projen-lib.VsCodeConfiguration.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@sumoc/projen-lib.VsCodeConfiguration.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@sumoc/projen-lib.VsCodeConfiguration.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@sumoc/projen-lib.VsCodeConfiguration.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@sumoc/projen-lib.VsCodeConfiguration.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@sumoc/projen-lib.VsCodeConfiguration.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@sumoc/projen-lib.VsCodeConfiguration.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@sumoc/projen-lib.VsCodeConfiguration.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@sumoc/projen-lib.VsCodeConfiguration.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---



