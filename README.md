<h1 align="center">Phone-Ticket Help</h1>
# Supporting Compose Markdown View

Compose Markdown View is an independent project with ongoing development and support made possible thanks to your donations.
- [Become a backer](https://www.paypal.me/mukeshsolanki)

## Getting started
Its really simple to integrate *Markdown* in android. All you need to do make the following change to you build gradle under the app module.

Step 1. Add the JitPack repository to your build file. Add it in your root build.gradle at the end of repositories:

```kotlin
allprojects {
  repositories {
    ...
    maven { url "https://jitpack.io" }
  }
}
```

Step 2. Add the dependency
```kotlin
dependencies {
    implementation 'com.github.mukeshsolanki:MarkdownView-Android:2.0.0'
}
```

## How to use Markdown
Its fairly simple and straight forward to use *Markdown* in you application.

- Using Compose

Just use `MarkDown` composable where you need to display the view like
```kotlin
MarkDown(
    url = URL("https://raw.githubusercontent.com/mukeshsolanki/MarkdownView-Android/main/README.md"),
    modifier = Modifier.fillMaxSize()
)
```

- Using Older View System (aka XML)

Add a compose view in your xml file like
```XML
<androidx.compose.ui.platform.ComposeView
    android:id="@+id/markdown"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```

and reference it in your activity/fragment and assign the markdown text/file like wise.
```kotlin
val markdown = findViewById(R.id.markdown)
markdown.composeView.apply {
    // Dispose of the Composition when the view's LifecycleOwner is destroyed
    setViewCompositionStrategy(DisposeOnViewTreeLifecycleDestroyed)
    setContent {
       // In Compose world
       MaterialTheme {
            MarkDown(
                url = URL("https://raw.githubusercontent.com/mukeshsolanki/MarkdownView-Android/main/README.md"),
                modifier = Modifier.fillMaxSize()
            )
       }
    }
}
```
## Markdown Sources
You have 3 different sources from where markdown data can be read
- `Text` - You can pass the content and string to render the markdown
```kotlin
MarkDown(
    text = "# Test Markdown",
    modifier = Modifier.fillMaxSize()
)
```
- `File` - You can read from a file and display the markdown data.
```kotlin
MarkDown(
    file = file,
    modifier = Modifier.fillMaxSize()
)
```
- `URL` - You can also specify the url of the markdown file.
```kotlin
MarkDown(
    url = URL("https://raw.githubusercontent.com/mukeshsolanki/MarkdownView-Android/main/README.md"),
    modifier = Modifier.fillMaxSize()
)
```

