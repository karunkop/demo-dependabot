# Dependabot Grouping Options

## The Problem
Dependabot **cannot automatically pair** packages with their `@types` dependencies. There's no built-in "smart matching" that creates separate groups for each library-types pair.

## Available Options

### Option 1: Group ALL Minor/Patch Updates (Current Configuration)
```yaml
groups:
  minor-and-patch:
    patterns:
      - "*"
    update-types:
      - "minor"
      - "patch"
```

**Result**: One PR with ALL safe updates (minor + patch) including all `@types` packages

**Pros**:
- Minimal PR noise
- Simple configuration
- Safe updates bundled together

**Cons**:
- Large PRs might be harder to review
- One failing test blocks all updates
- Major version updates still create separate PRs

---

### Option 2: Explicit Library-Type Pairs
```yaml
groups:
  express-with-types:
    patterns:
      - "express"
      - "@types/express"
  sinon-with-types:
    patterns:
      - "sinon"
      - "@types/sinon"
      - "@sinonjs/fake-timers"
      - "@types/sinonjs__fake-timers"
  # ... repeat for each library
```

**Result**: Separate PR for each library and its types

**Pros**:
- Precise control over which packages update together
- Prevents version mismatches between libraries and types
- Easier to review individual library updates

**Cons**:
- Verbose configuration
- Must manually add new libraries
- More PRs to manage

---

### Option 3: No Grouping
```yaml
# Remove the entire groups section
```

**Result**: Separate PR for **every single package** update

**Pros**:
- Maximum granularity
- Easiest to rollback individual updates
- Default Dependabot behavior

**Cons**:
- **Most PR noise** - separate PRs for `express` and `@types/express`
- Risk of version mismatches between libraries and their types
- Lots of PRs to review

---

## Recommendation

**For most projects**: Use **Option 1** (group all minor/patch updates)
- Reduces PR noise significantly
- Type packages usually update together with their libraries in minor/patch versions
- Major version updates (which need more review) still come separately

**For critical projects**: Use **Option 2** (explicit pairs) for libraries where you need tight control

**Advanced**: Combine both approaches:
```yaml
groups:
  critical-libs:
    patterns:
      - "express"
      - "@types/express"
  other-safe-updates:
    patterns:
      - "*"
    exclude-patterns:
      - "express"
      - "@types/express"
    update-types:
      - "minor"
      - "patch"
```

This gives you explicit control over critical dependencies while grouping everything else.

