# SHARD Music CDN

Статические музыкальные файлы и манифест обновлений SHARD.

- [Манифест автообновлений](https://shard-music-cdn.onrender.com/version.json)
- [Последние релизы Android](https://github.com/ShardChat/shard-music-cdn/releases)
- [Исходный код приложения](https://github.com/ShardChat/shard-frontend-typescript)

## Android 0.1.28

Добавлены роли пользователей, панель управления и инструменты модерации.

APK `shard-latest.apk` опубликован в [релизе v0.1.28](https://github.com/ShardChat/shard-music-cdn/releases/tag/v0.1.28). Архитектура — arm64; пакет — `com.shard.messenger.debug`, совместимый с предыдущими тестовыми сборками. Подпись APK сохранена для обновления без удаления данных.

Ссылка на APK и SHA-256 указаны в `version.json`; контрольная сумма также доступна в `SHA256SUMS.txt`. Windows-установщик в этот Android-релиз не входит.

При публикации нового выпуска сначала загрузите и проверьте APK в GitHub Releases, затем обновите `version.json` в `main`, чтобы автообновление ссылалось на доступный файл. Сам APK хранится в Releases, а не в истории Git.
