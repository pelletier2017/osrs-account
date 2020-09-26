# osrs-account
Create an old-school runescape account object in an explicit fluent builder style.

### Features
- checks for correct names of skills and realistic levels
- checks for valid quest names

### Examples

```javascript
let account = new OsrsAccountBuilder()
    .withName('MyName')
    .withSkills({
        'firemaking': 1,
        'woodcutting': 4,
        'fletching': 2,
        ...
    })
    .withQuestsCompleted([
        'vampire slayer',
        'gertrude\'s cat',
        ...
    ])
    .isIronMan()
    .build();
```

### Planned Next Steps
- tracks highest possible boost available and validates player has the quest and skill requirements to complete a quest
- able to determine what quests are completable for given skills and quests already completed
